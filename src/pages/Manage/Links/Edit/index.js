import React from 'react';

import Layout from '../../../Layout/Manage/index';

const EditLink = () => {
    return (
        <Layout>
            <h1>Editar link</h1>

            <div >
                <form>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>URL</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="from-group form-check">
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial" />
                            <span className="form-check-sign">Rede Social</span>
                        </label>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info btn-round">Cadastrar</button>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default EditLink;