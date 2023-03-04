<script lang="ts" context="module">
  import TodoIcon from '../icons/icon-todo.svelte'
  import CalendarIcon from '../icons/icon-calendar.svelte'
  import ReminderIcon from '../icons/icon-reminders.svelte'
  import PlanningIcon from '../icons/icon-planning.svelte'

  export function createLinks() {
    return [
      {
        page: 'Features',
        toggle: false,
        links: [
          {
            Icon: TodoIcon,
            page: 'Todo List',
          },
          {
            Icon: CalendarIcon,
            page: 'Calendar',
          },
          {
            Icon: ReminderIcon,
            page: 'Reminders',
          },
          {
            Icon: PlanningIcon,
            page: 'Planning',
          },
        ],
      },
      {
        page: 'Company',
        toggle: false,
        links: [
          {
            Icon: '',
            page: 'History',
          },
          {
            Icon: '',
            page: 'Our Team',
          },
          {
            Icon: '',
            page: 'Blog',
          },
        ],
      },
      {
        page: 'Careers',
      },
      {
        page: 'About',
      },
    ]
  }
</script>
