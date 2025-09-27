export interface INotificationProps {
    type: 'success' | 'error' | 'warning' | 'info',
    message: string,
    toastId: string
}