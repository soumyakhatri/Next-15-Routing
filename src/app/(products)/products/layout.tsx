import styles from './layout.module.css'

export const metadata = {
    title: "Products Layout Page",
    description: "Description About Products Layout Page",
}

export default function ProductsLayout({children}: {children: React.ReactNode}){
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Products Layout</h1>
            {children}
        </div>
    )
}