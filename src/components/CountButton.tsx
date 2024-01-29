type CountButtonProps = {
    count: number;
    onClick: (() => void) | undefined;
};

export const CountButton = ({ count, onClick = undefined }: CountButtonProps) => {
    console.log('CountButton re-render');
    
    const handleButtonClick = () => {
        if (onClick === undefined) {
            return;
        }

        onClick();
    }

    return <button onClick={handleButtonClick}>
        count is {count}
    </button>
}