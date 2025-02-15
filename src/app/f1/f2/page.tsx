import Link from "next/link";

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '1.5rem'
    },
    link: {
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.2s',
        display: 'inline-block'
    }
} as const;

export default function F2() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>F2 Page</h1>
            <Link href="/f1" style={styles.link}>F1</Link>
        </div>
    );
}