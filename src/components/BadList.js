import React from "react";

export const BadList = () => {
    return (
    <div class="col-md-6 mb-5">
        <h2 class="text-center">Task list</h2>
        <hr />
        <div class="list-items">
            <table class="table table-striped">
                <tbody id="task-list"></tbody>
            </table>
        </div>
    </div>)
};
