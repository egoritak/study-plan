// Study Planner Application
class StudyPlanner {
    constructor() {
        this.tasks = [
            {"id": 1, "month": "Октябрь", "subject": "ММФА", "task": "1", "dates": "07.10-08.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 2, "month": "Октябрь", "subject": "ММФА", "task": "2", "dates": "09.10-10.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 3, "month": "Октябрь", "subject": "ММФА", "task": "3", "dates": "13.10-14.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 4, "month": "Октябрь", "subject": "МИИМППР", "task": "1", "dates": "15.10-16.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 5, "month": "Октябрь", "subject": "МИИМППР", "task": "2", "dates": "17.10-20.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 6, "month": "Октябрь", "subject": "КИС", "task": "1", "dates": "21.10-22.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 7, "month": "Октябрь", "subject": "КИС", "task": "2", "dates": "23.10-24.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 8, "month": "Октябрь", "subject": "КИС", "task": "3", "dates": "27.10-28.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 9, "month": "Октябрь", "subject": "СПУПИК", "task": "1", "dates": "29.10-30.10", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 10, "month": "Ноябрь", "subject": "СПУПИК", "task": "2", "dates": "31.10-03.11", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 11, "month": "Ноябрь", "subject": "СПУПИК", "task": "3", "dates": "04.11-05.11", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 12, "month": "Ноябрь", "subject": "ММФА", "task": "4", "dates": "06.11-10.11", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 13, "month": "Ноябрь", "subject": "ММФА", "task": "5", "dates": "11.11-13.11", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 14, "month": "Ноябрь", "subject": "ММФА", "task": "6", "dates": "14.11-18.11", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 15, "month": "Ноябрь", "subject": "МИИМППР", "task": "3", "dates": "19.11-21.11", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 16, "month": "Ноябрь", "subject": "МИИМППР", "task": "4", "dates": "24.11-26.11", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 17, "month": "Декабрь", "subject": "НИРР", "task": "дневник", "dates": "27.11-28.11", "difficulty": "Легко", "duration": 2, "status": "planned", "progress": 0, "notes": "", "color": "#4CAF50"},
            {"id": 18, "month": "Декабрь", "subject": "НИРР", "task": "отчёт", "dates": "01.12-04.12", "difficulty": "Средне", "duration": 4, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 19, "month": "Декабрь", "subject": "Научка", "task": "отчёт", "dates": "05.12-11.12", "difficulty": "Сложно", "duration": 5, "status": "planned", "progress": 0, "notes": "", "color": "#F44336"},
            {"id": 20, "month": "Декабрь", "subject": "МИИМППР", "task": "5", "dates": "12.12-16.12", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 21, "month": "Декабрь", "subject": "КИС", "task": "ERP 1", "dates": "17.12-19.12", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 22, "month": "Декабрь", "subject": "КИС", "task": "ERP 2", "dates": "22.12-24.12", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"},
            {"id": 23, "month": "Декабрь", "subject": "КИС", "task": "ERP 3", "dates": "25.12-29.12", "difficulty": "Средне", "duration": 3, "status": "planned", "progress": 0, "notes": "", "color": "#FF9800"}
        ];

        this.subjects = {
            "ММФА": {"name": "Математические методы финансового анализа", "color": "#2196F3", "icon": "📊"},
            "МИИМППР": {"name": "Методы и инструменты информационного менеджмента", "color": "#9C27B0", "icon": "💻"},
            "КИС": {"name": "Корпоративные информационные системы", "color": "#00BCD4", "icon": "🏢"},
            "СПУПИК": {"name": "Системы поддержки управления персоналом", "color": "#4CAF50", "icon": "👥"},
            "НИРР": {"name": "Научно-исследовательская работа", "color": "#FF5722", "icon": "🔬"},
            "Научка": {"name": "Научка (Мицель)", "color": "#795548", "icon": "📚"}
        };

        this.currentView = 'dashboard';
        this.currentMonth = new Date(2025, 9); // October 2025
        this.currentTaskId = null;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDashboard();
        this.renderSubjects();
        this.populateSubjectFilter();
        this.showView('dashboard');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav__btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.getAttribute('data-view');
                this.showView(view);
            });
        });

        // Filters
        document.getElementById('monthFilter').addEventListener('change', () => this.filterTasks());
        document.getElementById('subjectFilter').addEventListener('change', () => this.filterTasks());
        document.getElementById('difficultyFilter').addEventListener('change', () => this.filterTasks());

        // Calendar navigation
        document.getElementById('prevMonth').addEventListener('click', () => this.changeMonth(-1));
        document.getElementById('nextMonth').addEventListener('click', () => this.changeMonth(1));

        // Modal
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('modalBackdrop').addEventListener('click', () => this.closeModal());
        document.getElementById('modalCancel').addEventListener('click', () => this.closeModal());
        document.getElementById('modalSave').addEventListener('click', () => this.saveTask());

        // Progress buttons
        document.querySelectorAll('.progress-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.progress-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Month card clicks
        document.querySelectorAll('.month-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const month = e.currentTarget.getAttribute('data-month');
                document.getElementById('monthFilter').value = month;
                this.showView('tasks');
                this.filterTasks();
            });
        });
    }

    showView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav__btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-view') === viewName) {
                btn.classList.add('active');
            }
        });

        // Update views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(viewName + 'View').classList.add('active');

        this.currentView = viewName;

        // Render view-specific content
        switch (viewName) {
            case 'tasks':
                this.renderTasks();
                break;
            case 'calendar':
                this.renderCalendar();
                break;
            case 'progress':
                this.renderProgressCharts();
                break;
        }
    }

    updateDashboard() {
        const stats = this.calculateStats();
        
        document.getElementById('totalTasks').textContent = stats.total;
        document.getElementById('completedTasks').textContent = stats.completed;
        document.getElementById('remainingDays').textContent = stats.remainingDays;
        document.getElementById('averageProgress').textContent = stats.averageProgress + '%';

        // Update progress circle
        const progressPercent = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;
        this.updateProgressCircle(progressPercent);

        // Update month progress
        this.updateMonthProgress();
    }

    calculateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.progress === 100).length;
        const totalProgress = this.tasks.reduce((sum, task) => sum + task.progress, 0);
        const averageProgress = total > 0 ? Math.round(totalProgress / total) : 0;
        
        const currentDate = new Date(2025, 9, 7); // October 7, 2025
        const endDate = new Date(2025, 11, 31); // December 31, 2025
        const remainingDays = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));

        return {
            total,
            completed,
            averageProgress,
            remainingDays
        };
    }

    updateProgressCircle(percentage) {
        const circle = document.querySelector('.progress-circle');
        const angle = (percentage / 100) * 360;
        circle.style.background = `conic-gradient(var(--color-primary) ${angle}deg, var(--color-secondary) ${angle}deg)`;
        document.getElementById('overallProgress').textContent = Math.round(percentage) + '%';
    }

    updateMonthProgress() {
        const months = ['Октябрь', 'Ноябрь', 'Декабрь'];
        
        months.forEach(month => {
            const monthTasks = this.tasks.filter(task => task.month === month);
            const completed = monthTasks.filter(task => task.progress === 100).length;
            const progress = monthTasks.length > 0 ? (completed / monthTasks.length) * 100 : 0;
            
            const monthId = month.toLowerCase() + 'Progress';
            const element = document.getElementById(monthId);
            if (element) {
                element.style.width = progress + '%';
            }
        });
    }

    renderSubjects() {
        const container = document.getElementById('subjectsGrid');
        container.innerHTML = '';

        Object.entries(this.subjects).forEach(([code, subject]) => {
            const subjectTasks = this.tasks.filter(task => task.subject === code);
            const completed = subjectTasks.filter(task => task.progress === 100).length;
            const progress = subjectTasks.length > 0 ? Math.round((completed / subjectTasks.length) * 100) : 0;

            const card = document.createElement('div');
            card.className = 'subject-card';
            card.innerHTML = `
                <div class="subject-card__header">
                    <span class="subject-card__icon">${subject.icon}</span>
                    <h4 class="subject-card__name">${code}</h4>
                </div>
                <p class="subject-card__full-name">${subject.name}</p>
                <div class="subject-card__stats">
                    <span class="subject-card__tasks">${subjectTasks.length} задач</span>
                    <span class="subject-card__progress">${progress}%</span>
                </div>
            `;

            container.appendChild(card);
        });
    }

    populateSubjectFilter() {
        const select = document.getElementById('subjectFilter');
        Object.entries(this.subjects).forEach(([code, subject]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = code;
            select.appendChild(option);
        });
    }

    renderTasks() {
        const container = document.getElementById('tasksContainer');
        const tasks = this.getFilteredTasks();
        
        container.innerHTML = '';

        if (tasks.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">Задачи не найдены</p>';
            return;
        }

        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = `task-card ${task.difficulty.toLowerCase() === 'легко' ? 'easy' : task.difficulty.toLowerCase() === 'средне' ? 'medium' : 'hard'}`;
            card.addEventListener('click', () => this.openTaskModal(task));

            const difficultyClass = task.difficulty.toLowerCase() === 'легко' ? 'easy' : task.difficulty.toLowerCase() === 'средне' ? 'medium' : 'hard';
            
            card.innerHTML = `
                <div class="task-card__header">
                    <div class="task-card__title">
                        <span class="task-card__subject">${this.subjects[task.subject]?.icon || '📄'} ${task.subject}</span>
                        <span class="task-card__task">- ${task.task}</span>
                    </div>
                    <span class="task-card__difficulty difficulty-stat ${difficultyClass}">${task.difficulty}</span>
                </div>
                <div class="task-card__info">
                    <span>📅 ${task.dates}</span>
                    <span>⏱️ ${task.duration} дня</span>
                    <span>📍 ${task.month}</span>
                </div>
                <div class="task-card__progress-container">
                    <div class="task-card__progress-label">
                        <span>Прогресс:</span>
                        <span class="task-card__progress-value">${task.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar__fill" style="width: ${task.progress}%"></div>
                    </div>
                </div>
                ${task.notes ? `<div class="task-card__notes">📝 ${task.notes}</div>` : ''}
            `;

            container.appendChild(card);
        });
    }

    getFilteredTasks() {
        const monthFilter = document.getElementById('monthFilter').value;
        const subjectFilter = document.getElementById('subjectFilter').value;
        const difficultyFilter = document.getElementById('difficultyFilter').value;

        return this.tasks.filter(task => {
            return (!monthFilter || task.month === monthFilter) &&
                   (!subjectFilter || task.subject === subjectFilter) &&
                   (!difficultyFilter || task.difficulty === difficultyFilter);
        });
    }

    filterTasks() {
        if (this.currentView === 'tasks') {
            this.renderTasks();
        }
    }

    renderCalendar() {
        const container = document.getElementById('calendarContainer');
        const titleElement = document.getElementById('calendarTitle');
        
        const monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        
        const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        
        titleElement.textContent = `${monthNames[this.currentMonth.getMonth()]} ${this.currentMonth.getFullYear()}`;
        
        const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
        const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - ((firstDay.getDay() + 6) % 7));
        
        const calendar = document.createElement('div');
        calendar.className = 'calendar-grid';
        
        // Headers
        dayNames.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-header-cell';
            header.textContent = day;
            calendar.appendChild(header);
        });
        
        // Calendar cells
        const currentDate = new Date(startDate);
        for (let i = 0; i < 42; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            
            const isCurrentMonth = currentDate.getMonth() === this.currentMonth.getMonth();
            const isToday = currentDate.toDateString() === new Date(2025, 9, 7).toDateString();
            
            if (!isCurrentMonth) {
                cell.classList.add('other-month');
            }
            if (isToday) {
                cell.classList.add('today');
            }
            
            cell.innerHTML = `<div class="calendar-cell__date">${currentDate.getDate()}</div>`;
            
            // Add tasks for this date
            const tasksContainer = document.createElement('div');
            tasksContainer.className = 'calendar-cell__tasks';
            
            const dayTasks = this.getTasksForDate(currentDate);
            dayTasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = `calendar-task ${task.difficulty.toLowerCase() === 'легко' ? 'easy' : task.difficulty.toLowerCase() === 'средне' ? 'medium' : 'hard'}`;
                taskElement.textContent = `${task.subject} ${task.task}`;
                taskElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openTaskModal(task);
                });
                tasksContainer.appendChild(taskElement);
            });
            
            cell.appendChild(tasksContainer);
            calendar.appendChild(cell);
            
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        container.innerHTML = '';
        container.appendChild(calendar);
    }

    getTasksForDate(date) {
        return this.tasks.filter(task => {
            const [startDate, endDate] = task.dates.split('-');
            const [startDay, startMonth] = startDate.split('.');
            const [endDay, endMonth] = endDate.split('.');
            
            const taskStartDate = new Date(2025, parseInt(startMonth) - 1, parseInt(startDay));
            const taskEndDate = new Date(2025, parseInt(endMonth) - 1, parseInt(endDay));
            
            return date >= taskStartDate && date <= taskEndDate;
        });
    }

    changeMonth(direction) {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + direction);
        this.renderCalendar();
    }

    renderProgressCharts() {
        this.renderSubjectProgressChart();
        this.renderDifficultyChart();
        this.renderMotivationSection();
    }

    renderSubjectProgressChart() {
        const ctx = document.getElementById('subjectProgressChart').getContext('2d');
        
        const subjectData = Object.keys(this.subjects).map(subject => {
            const tasks = this.tasks.filter(task => task.subject === subject);
            const completed = tasks.filter(task => task.progress === 100).length;
            return {
                subject,
                total: tasks.length,
                completed,
                progress: tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0
            };
        });

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: subjectData.map(item => item.subject),
                datasets: [
                    {
                        label: 'Всего задач',
                        data: subjectData.map(item => item.total),
                        backgroundColor: '#1FB8CD',
                        borderRadius: 4
                    },
                    {
                        label: 'Выполнено',
                        data: subjectData.map(item => item.completed),
                        backgroundColor: '#4CAF50',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Прогресс по предметам'
                    },
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    renderDifficultyChart() {
        const ctx = document.getElementById('difficultyChart').getContext('2d');
        
        const difficulties = ['Легко', 'Средне', 'Сложно'];
        const colors = ['#4CAF50', '#FF9800', '#F44336'];
        
        const difficultyData = difficulties.map(difficulty => {
            return this.tasks.filter(task => task.difficulty === difficulty).length;
        });

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: difficulties,
                datasets: [{
                    data: difficultyData,
                    backgroundColor: colors,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Распределение задач по сложности'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    renderMotivationSection() {
        const container = document.getElementById('motivationSection');
        const stats = this.calculateStats();
        
        let motivation = {
            icon: '🚀',
            title: 'Начинаем путь!',
            message: 'У вас впереди 23 задачи. Начните с легких заданий, чтобы войти в ритм!'
        };

        if (stats.averageProgress > 75) {
            motivation = {
                icon: '🏆',
                title: 'Почти у цели!',
                message: 'Отличная работа! Вы почти закончили. Не останавливайтесь сейчас!'
            };
        } else if (stats.averageProgress > 50) {
            motivation = {
                icon: '💪',
                title: 'Отличный прогресс!',
                message: 'Вы на полпути к успеху! Продолжайте в том же духе!'
            };
        } else if (stats.averageProgress > 25) {
            motivation = {
                icon: '⭐',
                title: 'Хорошее начало!',
                message: 'Вы уже сделали первые шаги. Каждая выполненная задача приближает вас к цели!'
            };
        }

        container.innerHTML = `
            <div class="motivation-card">
                <div class="motivation-card__icon">${motivation.icon}</div>
                <h3 class="motivation-card__title">${motivation.title}</h3>
                <p class="motivation-card__message">${motivation.message}</p>
            </div>
        `;
    }

    openTaskModal(task) {
        this.currentTaskId = task.id;
        
        document.getElementById('modalTitle').textContent = `${task.subject} - ${task.task}`;
        document.getElementById('taskNotes').value = task.notes;
        
        // Set progress buttons
        document.querySelectorAll('.progress-btn').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.progress) === task.progress) {
                btn.classList.add('active');
            }
        });
        
        document.getElementById('taskModal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('taskModal').classList.add('hidden');
        this.currentTaskId = null;
    }

    saveTask() {
        if (!this.currentTaskId) return;
        
        const task = this.tasks.find(t => t.id === this.currentTaskId);
        if (!task) return;
        
        const activeProgressBtn = document.querySelector('.progress-btn.active');
        const newProgress = activeProgressBtn ? parseInt(activeProgressBtn.dataset.progress) : task.progress;
        const notes = document.getElementById('taskNotes').value;
        
        task.progress = newProgress;
        task.notes = notes;
        task.status = newProgress === 100 ? 'completed' : 'in_progress';
        
        this.closeModal();
        this.updateDashboard();
        
        // Refresh current view
        if (this.currentView === 'tasks') {
            this.renderTasks();
        } else if (this.currentView === 'progress') {
            this.renderProgressCharts();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StudyPlanner();
});