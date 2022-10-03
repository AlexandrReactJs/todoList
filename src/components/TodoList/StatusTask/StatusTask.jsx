import React from 'react'
import styles from "./StatusTask.module.css"
const StatusTask = ({activeIndex, setActiveIndex}) => {
    const [open, setOpen] = React.useState(false);

    
    const types = ['Важное', 'Сделать позже', 'Можно отложить']
    const selectedType = types[activeIndex];

    return (
        <div className={styles.statusTaskSettings}>
            <div className={styles.activeStatus}>
                <h3 onClick={() => { setOpen(!open) }}>Важность:</h3>
                <div className={styles.selectedStatus}>
                    <div className={activeIndex === 0 ? styles.greenDot : activeIndex === 1 ? styles.orangeDot : styles.redDot}></div>
                    <p>{selectedType}</p>
                </div>

            </div>

            {
                open &&
                <div className={styles.statusTaskItems}>
                    {types.map((el, i) =>
                        <div className={styles.statusTaskItem} onClick={() => { setActiveIndex(i) }}>
                            <div className={i === 0 ? styles.greenDot : i === 1 ? styles.orangeDot : styles.redDot}></div>
                            <p>{el}</p>
                        </div>)}
                </div>
            }

        </div>
    )
}


export default StatusTask;