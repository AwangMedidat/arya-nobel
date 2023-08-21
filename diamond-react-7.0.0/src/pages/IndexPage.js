import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const IndexPage = () => {
    const [data, setData] = useState([]);
    const [languageSelect, setLanguageSelect] = useState("");
    const bodyTemplate = (data, props) => {
        return (
            <>
                <span className="p-column-title">{props.header}</span>
                {data[props.field]}
            </>
        );
    };

    const getLanguageName = (code) => {
        const languageName = {
            en: "English",
            ja: "Japanese",
            pl: "Polish",
        };

        return languageName[code] || "Uknown";
    };

    const changeDate = (dateText) => {
        const parts = dateText.split("-");
        const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const formatdate = `${parts[2]} - ${monthName[parseInt(parts[1], 10) - 1]} - ${parts[0]}`;

        return formatdate;
    };

    useEffect(() => {
        const films = () => {
            axios
                .get("https://api.themoviedb.org/3/movie/popular?api_key=dab17e357c37981ecaf73f404d80118c&language=en-US&page=1")
                .then((res) => {
                    const movieData = res.data.results.map((movie) => {
                        changeDate(movie.release_date);
                        return {
                            ...movie,
                            original_language: getLanguageName(movie.original_language),
                            release_date: changeDate(movie.release_date),
                        };
                    });
                    setData(movieData);
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        films();
    }, []);

    const selectedLanguange = (e) => {
        setLanguageSelect(e.target.value);
    };

    const filteredData = languageSelect ? data.filter((item) => item.original_language === languageSelect) : data;

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="col-12 xl:col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Popular Movie</h4>
                                <select onChange={selectedLanguange}>
                                    <option value="English">English</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Polish">Polish</option>
                                </select>
                            </div>

                            <DataTable value={filteredData} paginator rows={5} className="p-datatable-products">
                                <Column field="id" header="ID" sortable body={bodyTemplate}></Column>
                                <Column field="original_language" header="original_language" sortable body={bodyTemplate}></Column>
                                <Column field="release_date" header="release_date" sortable body={bodyTemplate}></Column>
                                <Column field="original_title" header="original_title" sortable body={bodyTemplate}></Column>
                                <Column field="overview" header="overview" sortable body={bodyTemplate}></Column>
                            </DataTable>
                        </div>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="logo-container">
                            <div className="logo"></div>
                        </div>
                        <div className="container">
                            <h1 className="display-5">Hello! I'm George Marco Alvin</h1>
                            <h1 className="display-5 thin mt-auto">Consult, Design, and Develop Websites</h1>
                            <p className="small text-center text-light">
                                Have something great in mind? Feel free to contact me.
                                <br />
                                I'll help you to make it happen.
                                <br />
                            </p>
                            <p className="text-center">
                                <button className="button2 btn-outline-light btn-sm text-uppercase" id="whatsapp" href="#" role="button">
                                    Let's Make Contact
                                </button>
                            </p>
                        </div>
                    </div>
                    <main role="main">
                        <div className="custom-container">
                            <div className="grid">
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Consult{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-comments"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Design{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-paint-brush"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Develop{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-cubes"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Revolutionary circular, movements a or impact framework social impact low- hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Marketing{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-bullhorn"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Manage{" "}
                                                <span className="float-right">
                                                    <i className="fa fa-tasks"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Evolve{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-chart-line icon"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(IndexPage, comparisonFn);
