import React from 'react';
import './BarGraphView.css';

export class BarGraphView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.showCharts) {
            return null;
        }
        const totalScore = 800;
        let diffTotalScore = 0, diffQuantScore = 0, diffVerbalScore = 0;
        const targetTotalScore = (parseInt(this.props.params.storevalueTargetQuant) + parseInt(this.props.params.storevalueTargetVerbal)) * 5 + 200;
        const currTotalScore = 200 + (parseInt(this.props.params.storevalueCurrentQuant) + parseInt(this.props.params.storevalueCurrentVerbal)) * 5;
        const valueTargetVerbal = this.props.params.storevalueTargetVerbal;
        const valueCurrentVerbal = this.props.params.storevalueCurrentVerbal;
        const valueTargetQuant = this.props.params.storevalueTargetQuant;
        const valueCurrentQuant = this.props.params.storevalueCurrentQuant;

        if (targetTotalScore >= currTotalScore) {
            diffTotalScore = targetTotalScore - currTotalScore;
        } else {
            diffTotalScore = currTotalScore - targetTotalScore;
        }

        if (valueTargetQuant >= valueCurrentQuant) {
            diffQuantScore = valueTargetQuant - valueCurrentQuant;
        } else {
            diffQuantScore = valueCurrentQuant - valueTargetQuant;
        }

        if (valueTargetVerbal >= valueCurrentVerbal) {
            diffVerbalScore = valueTargetVerbal - valueCurrentVerbal;
        } else {
            diffVerbalScore = valueCurrentVerbal - valueTargetVerbal;
        }

        return (
            <div>
                {/* code for total score of GMAT */}
                <div className="mainChart">
                    <br></br>
                    {/* Text over the indicator for score */}
                    {(diffTotalScore > 15) && <div style={{ marginTop: "-20px" }}><h3 className="headingIdForTotalChart">Total Score <br></br>{currTotalScore}</h3><div className="textForPITar" style={{ marginLeft: (targetTotalScore + 140) + "px" }}>{targetTotalScore}</div>
                        <div className="textForPICurr" style={{ marginLeft: (currTotalScore + 140) + "px" }}>{currTotalScore}</div></div>
                    }{(diffTotalScore > 0 && diffTotalScore <= 15) && <div style={{ marginTop: "-20px" }}><h3 className="headingIdForTotalChart1">Total Score <br></br>{currTotalScore}</h3><div className="textForPITar1" style={{ marginLeft: (targetTotalScore + 140) + "px" }}>{targetTotalScore}</div>
                        <div className="textForPICurr" style={{ marginLeft: (currTotalScore + 140) + "px" }}>{currTotalScore}</div></div>
                    }{(diffTotalScore == 0) && <div style={{ marginTop: "-20px" }}><h3 className="headingIdForTotalChart">Total Score <br></br>{currTotalScore}</h3>
                        <div className="textForPICurr" style={{ marginLeft: (currTotalScore + 140) + "px" }}>{currTotalScore}</div></div>
                    }
                    {/* displaying bar chart based on different scores  */}
                    {(targetTotalScore > currTotalScore) && <div className="barChartForTotal">
                        <div className="forTargetTotal" style={{ width: targetTotalScore + "px" }}>
                            {/* Indicator at top and botton depending upon the difference in score */}
                            {(targetTotalScore > currTotalScore + 15) &&
                                <div style={{
                                    position: 'absolute', content: "", background: "#f0f0f0",
                                    top: "-15px", left: targetTotalScore - 5 + "px", borderLeft: "3px solid #f0f0f0", borderRight: "3px solid #f0f0f0", borderTop: "10px solid #ffe28a"
                                }}></div>

                            }{(targetTotalScore <= currTotalScore + 15) && <div style={{
                                position: 'absolute', content: "", background: "#f0f0f0",
                                bottom: "-15px", transform: "rotate(180deg)", left: targetTotalScore - 5 + "px", borderLeft: "3px solid #f0f0f0", borderRight: "3px solid #f0f0f0", borderTop: "10px solid #ffe28a"
                            }}></div>}

                            <div className="forCurrentTotal" style={{ width: currTotalScore + "px" }}>
                                <div style={{
                                    position: 'absolute', content: "", background: "#f0f0f0",
                                    top: "-15px", left: currTotalScore - 5 + "px", borderLeft: "3px solid #f0f0f0", borderRight: "3px solid #f0f0f0", borderTop: "10px solid #0fa2eb"
                                }} />
                                {(diffTotalScore > 25) && <p className="textForTotalDiff" style={{ margin: "0px" + " " + " " + (currTotalScore + (diffTotalScore / 2)) + "px" }}> +{diffTotalScore} </p>}
                                {(diffTotalScore <= 25) && <p className="textForTotalDiff" style={{ margin: "0px" + " " + " " + (currTotalScore + (diffTotalScore / 2) + 20) + "px" }}> +{diffTotalScore} </p>}

                            </div>
                        </div>
                    </div>
                    }{(targetTotalScore <= currTotalScore) && <div className="barChartForTotal">
                        <div className="forTargetTotal" style={{ width: targetTotalScore + "px" }}>
                            {/* Indicator at top and botton depending upon the difference in score */}
                            {(currTotalScore > targetTotalScore + 15) && <div style={{
                                position: 'absolute', content: "", background: "#f0f0f0",
                                top: "-15px", left: targetTotalScore - 5 + "px", borderLeft: "3px solid #f0f0f0", borderRight: "3px solid #f0f0f0", borderTop: "10px solid #ffe28a"
                            }} />
                            }{
                                (currTotalScore <= targetTotalScore + 15) && <div style={{
                                    position: 'absolute', content: "", background: "#f0f0f0",
                                    bottom: "-15px", transform: "rotate(180deg)", left: targetTotalScore - 5 + "px", borderLeft: "3px solid #f0f0f0", borderRight: "3px solid #f0f0f0", borderTop: "10px solid #ffe28a"
                                }} />
                            }
                            <div className="forCurrentTotal" style={{ width: currTotalScore + "px" }}>
                                <div style={{
                                    position: 'absolute', content: "", background: "#f0f0f0",
                                    top: "-15px", left: currTotalScore - 5 + "px", borderLeft: "3px solid #f0f0f0", borderRight: "3px solid #f0f0f0", borderTop: "10px solid #0fa2eb"
                                }} />
                            </div>
                        </div>
                    </div>
                    }
                    <br></br>
                    {(targetTotalScore > currTotalScore) && <p className="textForTotalChart">Your estimated GMAT score per your performance in this mock test is {currTotalScore}, which is {diffTotalScore} points lower than your target GMAT score of {targetTotalScore}.</p>
                    }{(targetTotalScore === currTotalScore) && <p className="textForTotalChart">Your estimated GMAT score per your performance in this mock test is {currTotalScore}, which is equal to your target score.</p>
                    }{(targetTotalScore < currTotalScore) && <p className="textForTotalChart">Your estimated GMAT score per your performance in this mock test is {currTotalScore}, which is {diffTotalScore} points higher than your target GMAT score of {targetTotalScore}.</p>
                    }
                </div>
                {/* Code for quant and verbal score chart */}
                <div className="subChartsLayout">
                    <form className="form">
                        <div className="subCharts">
                            <br></br>
                            {/* Text over the indicator for quant score */}
                            {(diffQuantScore > 5) && <div><h3 className="headingIdForTitleQuantChart">Quant Score <br></br> <big> Q{valueCurrentQuant}</big></h3><div className="textForPITarQuant" style={{ marginLeft: (valueTargetQuant * 5) - 10 + "px" }}>Q{valueTargetQuant}</div>
                                <div className="textForPICurrQuant" style={{ marginLeft: (valueCurrentQuant * 5) - 10 + "px" }}>Q{valueCurrentQuant}</div></div>
                            }{(diffQuantScore > 0 && diffQuantScore <= 5) && <div><h3 className="headingIdForTitleQuantChart">Quant Score <br></br> <big> Q{valueCurrentQuant}</big> </h3><div className="textForPITarQuant1" style={{ marginLeft: (valueTargetQuant * 5) - 10 + "px" }}>Q{valueTargetQuant}</div>
                                <div className="textForPICurrQuant" style={{ marginLeft: (valueCurrentQuant * 5) - 10 + "px" }}>Q{valueCurrentQuant}</div></div>}
                            {(diffQuantScore == 0) && <div><h3 className="headingIdForTitleQuantChart">Quant Score <br></br> <big> Q{valueCurrentQuant}</big></h3>
                                <div className="textForPICurrQuant" style={{ marginLeft: (valueCurrentQuant * 5) - 10 + "px" }}>Q{valueCurrentQuant}</div></div>}

                            {/* displaying bar chart based on different scores  */}
                            {(valueTargetQuant > valueCurrentQuant) && <div className="barChartForQuant" style={{ width: "300px" }}>
                                <div className="forTargetQuantVerbal" style={{ width: valueTargetQuant * 5 + "px" }}>
                                    {/* Indicator at top and botton depending upon the difference in score */}
                                    {(valueTargetQuant > valueCurrentQuant + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        top: "-15px", left: (valueTargetQuant * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }} />
                                    }{(valueTargetQuant <= valueCurrentQuant + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        bottom: "-15px", transform: "rotate(180deg)", left: (valueTargetQuant * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }} />}
                                    <div className="forCurrentQuantVerbal" style={{ width: valueCurrentQuant * 5 + "px" }}>
                                        <div style={{
                                            position: 'absolute', content: "", background: "#FFFFFF",
                                            top: "-15px", left: (valueCurrentQuant * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #0fa2eb"
                                        }}></div>
                                        {(diffQuantScore > 5) && <p className="textForDiffScore" style={{ margin: "-2px" + " " + " " + (valueCurrentQuant + (diffQuantScore / 2)) * 5 + "px" }}> +{diffQuantScore} </p>}
                                        {(diffQuantScore <= 5) && <p className="textForDiffScore" style={{ margin: "-2px" + " " + " " + (valueCurrentQuant + (diffQuantScore / 2) + 5) * 5 + "px" }}> +{diffQuantScore} </p>}

                                    </div>
                                </div>
                            </div>
                            }{(valueTargetQuant <= valueCurrentQuant) && <div className="barChartForQuant" style={{ width: "300px" }}>
                                <div className="forTargetQuantVerbal" style={{ width: valueTargetQuant * 5 + "px" }} >
                                    {/* Indicator at top and botton depending upon the difference in score */}
                                    {(valueCurrentQuant > valueTargetQuant + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        top: "-15px", left: (valueTargetQuant * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }}></div>
                                    }{(valueCurrentQuant <= valueTargetQuant + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        bottom: "-15px", transform: "rotate(180deg)", left: (valueTargetQuant * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }}></div>}

                                    <div className="forCurrentQuantVerbal" style={{ width: valueCurrentQuant * 5 + "px" }}>
                                        <div style={{
                                            position: 'absolute', content: "", background: "#FFFFFF",
                                            top: "-15px", left: (valueCurrentQuant * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #0fa2eb"
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                            }
                            <br></br>
                            {(valueTargetQuant > valueCurrentQuant) && <p className="textForQuantChart">Your estimated quantitative score per your performance in this <br></br> mock test is Q{valueCurrentQuant}, which is {diffQuantScore} points lower than your target <br></br> quantitative score of Q{valueTargetQuant}.</p>
                            }{(valueTargetQuant === valueCurrentQuant) && <p className="textForQuantChart">Your estimated quantitative score per your performance in this <br></br> mock test is Q{valueCurrentQuant}, which is equal to your target <br></br> score.</p>
                            }{(valueTargetQuant < valueCurrentQuant) && <p className="textForQuantChart">Your estimated quantitative score per your performance in this <br></br> mock test is Q{valueCurrentQuant}, which is {diffQuantScore} points higher than your target <br></br> quantitative score of Q{valueTargetQuant}.</p>
                            }
                        </div>

                        {/* Code for verbal score chart */}

                        <div className="subCharts1">
                            <br></br>
                            {/* Text over the indicator for verbal score */}
                            {(diffVerbalScore > 5) && <div><h3 className="headingIdForTitleVerbalChart">Verbal Score <br></br> <big>V{valueCurrentVerbal}</big></h3>
                                <div className="textForPITarQuant" style={{ marginLeft: (valueTargetVerbal * 5) - 10 + "px" }}>V{valueTargetVerbal}</div>
                                <div className="textForPICurrQuant" style={{ marginLeft: (valueCurrentVerbal * 5) - 10 + "px" }}>V{valueCurrentVerbal}</div></div>
                            }{(diffVerbalScore > 0 && diffVerbalScore <= 5) && <div><h3 className="headingIdForTitleVerbalChart">Verbal Score <br></br> <big>V{valueCurrentVerbal}</big></h3>
                                <div className="textForPITarQuant1" style={{ marginLeft: (valueTargetVerbal * 5) - 10 + "px" }}>V{valueTargetVerbal}</div>
                                <div className="textForPICurrQuant" style={{ marginLeft: (valueCurrentVerbal * 5) - 10 + "px" }}>V{valueCurrentVerbal}</div></div>}
                            {(diffVerbalScore == 0) && <div><h3 className="headingIdForTitleVerbalChart">Verbal Score <br></br> <big>V{valueCurrentVerbal}</big></h3>
                                <div className="textForPICurrQuant" style={{ marginLeft: (valueCurrentVerbal * 5) - 10 + "px" }}>V{valueCurrentVerbal}</div></div>}

                            {/* displaying bar chart based on different scores  */}
                            {(valueTargetVerbal > valueCurrentVerbal) && <div className="barChartForVerbal" style={{ width: "300px" }}>
                                <div className="forTargetQuantVerbal" style={{ width: valueTargetVerbal * 5 + "px" }}>
                                    {/* Indicator at top and botton depending upon the difference in score */}
                                    {(valueTargetVerbal > valueCurrentVerbal + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        top: "-15px", left: (valueTargetVerbal * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }} />
                                    }{(valueTargetVerbal <= valueCurrentVerbal + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        bottom: "-15px", transform: "rotate(180deg)", left: (valueTargetVerbal * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }} />
                                    }

                                    <div className="forCurrentQuantVerbal" style={{ width: valueCurrentVerbal * 5 + "px" }}>
                                        <div style={{
                                            position: 'absolute', content: "", background: "#FFFFFF",
                                            top: "-15px", left: (valueCurrentVerbal * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #0fa2eb"
                                        }}></div>
                                        {(diffVerbalScore > 5) && <p className="textForDiffScore" style={{ margin: -2 + "px" + " " + " " + (valueCurrentVerbal + (diffVerbalScore / 2)) * 5 + "px" }}> +{diffVerbalScore} </p>}
                                        {(diffVerbalScore <= 5) && <p className="textForDiffScore" style={{ margin: -2 + "px" + " " + " " + (valueCurrentVerbal + (diffVerbalScore / 2) + 5) * 5 + "px" }}> +{diffVerbalScore} </p>}
                                    </div>
                                </div>
                            </div>
                            }{(valueTargetVerbal <= valueCurrentVerbal) && <div className="barChartForVerbal" style={{ width: "300px" }}>
                                <div className="forTargetQuantVerbal" style={{ width: valueTargetVerbal * 5 + "px" }} >
                                    {/* Indicator at top and botton depending upon the difference in score */}
                                    {(valueCurrentVerbal > valueTargetVerbal + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        top: "-15px", left: (valueTargetVerbal * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }} />
                                    }{(valueCurrentVerbal <= valueTargetVerbal + 5) && <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        bottom: "-15px", transform: "rotate(180deg)", left: (valueTargetVerbal * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #ffe28a"
                                    }} />}

                                    <div className="forCurrentQuantVerbal" style={{ width: valueCurrentVerbal * 5 + "px" }}></div>
                                    <div style={{
                                        position: 'absolute', content: "", background: "#FFFFFF",
                                        top: "-15px", left: (valueCurrentVerbal * 5) - 5 + "px", borderLeft: "3px solid #ffffff", borderRight: "3px solid #ffffff", borderTop: "10px solid #0fa2eb"
                                    }}></div>
                                </div>
                            </div>
                            }
                            <br></br>
                            {(valueTargetVerbal > valueCurrentVerbal) && <p className="textForQuantChart">Your estimated verbal score per your performance in this <br></br> mock test is V{valueCurrentVerbal}, which is {diffVerbalScore} points lower than your target <br></br> verbal score of V{valueTargetVerbal}.</p>
                            }{(valueTargetVerbal === valueCurrentVerbal) && <p className="textForQuantChart">Your estimated verbal score per your performance in this <br></br> mock test is V{valueCurrentVerbal}, which is equal to your target <br></br> score.</p>
                            }{(valueTargetVerbal < valueCurrentVerbal) && <p className="textForQuantChart">Your estimated verbal score per your performance in this <br></br> mock test is V{valueCurrentVerbal}, which is {diffVerbalScore} points higher than your target <br></br> verbal score of V{valueTargetVerbal}.</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}