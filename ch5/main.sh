#!/bin/bash

generate_token() {
    local length="${1:-16}"
    tr -dc 'A-Za-z0-9' < /dev/urandom | head -c "$length"
}

start_envs() {
    local n=$1
    local session_name="jupyter_env"
    local base_port=8888

    if tmux has-session -t "$session_name" 2>/dev/null; then
        tmux kill-session -t "$session_name"
    fi

    tmux new-session -d -s "$session_name" -n "notebook_0"

    local ids=()
    local ports=()
    local tokens=()

    for (( i=0; i<n; i++ )); do
        dir_name="dir$i"
        mkdir -p "$dir_name"

        local port=$((base_port + i))
        local token
        token=$(generate_token 16)

        if [ $i -eq 0 ]; then
            local command="jupyter notebook --no-browser --port=$port --NotebookApp.token='$token' --notebook-dir='$dir_name' > jupyter_log_$i.txt 2>&1"
            echo "Запуск Jupyter Notebook в окне 'notebook_$i' на порту $port с токеном $token..."
            tmux send-keys -t "${session_name}:notebook_$i" "$command" C-m
        else
            tmux new-window -t "$session_name" -n "notebook_$i"
            local command="jupyter notebook --no-browser --port=$port --NotebookApp.token='$token' --notebook-dir='$dir_name' > jupyter_log_$i.txt 2>&1"
            echo "Запуск Jupyter Notebook в окне 'notebook_$i' на порту $port с токеном $token..."
            tmux send-keys -t "${session_name}:notebook_$i" "$command" C-m
        fi

        sleep 2
        
        actual_port=$(grep -oP 'http://localhost:[0-9]+' "jupyter_log_$i.txt" | head -n 1 | grep -oP '[0-9]+')

        if [ -z "$actual_port" ]; then
            echo "Не удалось получить фактический порт для окружения 'notebook_$i'."
            actual_port=$port
        fi

        ids+=("notebook_$i")
        ports+=("$actual_port")
        tokens+=("$token")
        
        echo "id: ${ids[i]}, port: ${ports[i]}, token: ${tokens[i]}"
    done

    tmux select-window -t "${session_name}:0"
}

stop_env() {
    local id=$1
    if tmux has-session -t "jupyter_env" 2>/dev/null; then
        if tmux list-windows -t "jupyter_env" | grep -q "notebook_$id"; then
            tmux kill-window -t "jupyter_env:notebook_$id" && echo "Окружение $id остановлено."
        else
            echo "Окружение 'notebook_$id' не существует."
        fi
    else
        echo "Сессия 'jupyter_env' не существует."
    fi
}

stop_all_envs() {
    if tmux has-session -t "jupyter_env" 2>/dev/null; then
        tmux kill-session -t "jupyter_env" && echo "Все окружения остановлены."
    else
        echo "Сессия 'jupyter_env' не существует."
    fi
}

usage() {
    echo "Использование: $0 {start|stop|stop_all} [N|id]"
}

main() {
    if [[ $# -lt 1 ]]; then
        usage
        exit 1
    fi

    local command=$1
    case "$command" in
        start)
            [[ $# -ne 2 || ! $2 =~ ^[0-9]+$ ]] && { echo "Укажите количество окружений для запуска."; exit 1; }
            start_envs "$2"
            ;;
        stop)
            [[ $# -ne 2 || ! $2 =~ ^[0-9]+$ ]] && { echo "Укажите id окружения для остановки."; exit 1; }
            stop_env "$2"
            ;;
        stop_all)
            stop_all_envs
            ;;
        *)
            usage
            exit 1;
            ;;
    esac
}

main "$@"

